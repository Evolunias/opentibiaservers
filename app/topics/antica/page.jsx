import AnticaKeywordPage, { generateMetadata } from './antica';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaKeywordPage />;
}
