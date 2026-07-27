import RealestaSimilarServersKeywordPage, { generateMetadata } from './realesta-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSimilarServersKeywordPage />;
}
