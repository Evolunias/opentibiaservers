import BestMarolaotKeywordPage, { generateMetadata } from './best-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotKeywordPage />;
}
