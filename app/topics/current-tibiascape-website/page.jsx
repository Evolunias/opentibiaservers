import CurrentTibiascapeWebsiteKeywordPage, { generateMetadata } from './current-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeWebsiteKeywordPage />;
}
