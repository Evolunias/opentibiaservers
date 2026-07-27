import CurrentRubinotWebsiteKeywordPage, { generateMetadata } from './current-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotWebsiteKeywordPage />;
}
