import AmeriaSimilarServersKeywordPage, { generateMetadata } from './ameria-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSimilarServersKeywordPage />;
}
