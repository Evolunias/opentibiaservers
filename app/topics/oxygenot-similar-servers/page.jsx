import OxygenotSimilarServersKeywordPage, { generateMetadata } from './oxygenot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSimilarServersKeywordPage />;
}
