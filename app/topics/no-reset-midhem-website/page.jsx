import NoResetMidhemWebsiteKeywordPage, { generateMetadata } from './no-reset-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemWebsiteKeywordPage />;
}
