import HighExpWikiNorthAmericaKeywordPage, { generateMetadata } from './high-exp-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiNorthAmericaKeywordPage />;
}
