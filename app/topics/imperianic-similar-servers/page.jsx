import ImperianicSimilarServersKeywordPage, { generateMetadata } from './imperianic-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSimilarServersKeywordPage />;
}
