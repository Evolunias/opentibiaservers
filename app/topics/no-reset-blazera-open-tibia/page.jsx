import NoResetBlazeraOpenTibiaKeywordPage, { generateMetadata } from './no-reset-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraOpenTibiaKeywordPage />;
}
