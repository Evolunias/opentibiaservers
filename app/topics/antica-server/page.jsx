import AnticaServerKeywordPage, { generateMetadata } from './antica-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaServerKeywordPage />;
}
