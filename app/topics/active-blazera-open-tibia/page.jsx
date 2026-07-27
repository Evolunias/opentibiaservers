import ActiveBlazeraOpenTibiaKeywordPage, { generateMetadata } from './active-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraOpenTibiaKeywordPage />;
}
