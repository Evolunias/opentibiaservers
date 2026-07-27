import NoResetCanobWebsiteKeywordPage, { generateMetadata } from './no-reset-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobWebsiteKeywordPage />;
}
