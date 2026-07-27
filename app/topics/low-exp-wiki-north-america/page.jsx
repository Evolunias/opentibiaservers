import LowExpWikiNorthAmericaKeywordPage, { generateMetadata } from './low-exp-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiNorthAmericaKeywordPage />;
}
