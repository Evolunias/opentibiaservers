import CurrentOxygenotWebsiteKeywordPage, { generateMetadata } from './current-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotWebsiteKeywordPage />;
}
