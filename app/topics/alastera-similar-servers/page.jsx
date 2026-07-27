import AlasteraSimilarServersKeywordPage, { generateMetadata } from './alastera-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSimilarServersKeywordPage />;
}
