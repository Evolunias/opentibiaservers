import BestMarolaotServerKeywordPage, { generateMetadata } from './best-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotServerKeywordPage />;
}
