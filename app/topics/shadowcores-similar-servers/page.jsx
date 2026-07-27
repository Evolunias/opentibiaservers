import ShadowcoresSimilarServersKeywordPage, { generateMetadata } from './shadowcores-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSimilarServersKeywordPage />;
}
