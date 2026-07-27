import AnticaWarsKeywordPage, { generateMetadata } from './antica-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaWarsKeywordPage />;
}
