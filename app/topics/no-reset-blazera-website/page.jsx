import NoResetBlazeraWebsiteKeywordPage, { generateMetadata } from './no-reset-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraWebsiteKeywordPage />;
}
