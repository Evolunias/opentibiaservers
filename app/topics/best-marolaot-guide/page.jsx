import BestMarolaotGuideKeywordPage, { generateMetadata } from './best-marolaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotGuideKeywordPage />;
}
