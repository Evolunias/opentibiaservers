import HighExpWikiSouthAmericaKeywordPage, { generateMetadata } from './high-exp-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiSouthAmericaKeywordPage />;
}
