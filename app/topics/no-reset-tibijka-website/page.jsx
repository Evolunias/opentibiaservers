import NoResetTibijkaWebsiteKeywordPage, { generateMetadata } from './no-reset-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaWebsiteKeywordPage />;
}
