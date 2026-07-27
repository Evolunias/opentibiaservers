import NoResetUnlineWebsiteKeywordPage, { generateMetadata } from './no-reset-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineWebsiteKeywordPage />;
}
