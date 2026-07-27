import AureraGlobalSimilarServersKeywordPage, { generateMetadata } from './aurera-global-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSimilarServersKeywordPage />;
}
