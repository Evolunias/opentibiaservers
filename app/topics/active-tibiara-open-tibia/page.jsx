import ActiveTibiaraOpenTibiaKeywordPage, { generateMetadata } from './active-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraOpenTibiaKeywordPage />;
}
