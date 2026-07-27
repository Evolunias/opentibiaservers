import AnticaWorldKeywordPage, { generateMetadata } from './antica-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaWorldKeywordPage />;
}
