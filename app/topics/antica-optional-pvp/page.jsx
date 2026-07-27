import AnticaOptionalPvpKeywordPage, { generateMetadata } from './antica-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaOptionalPvpKeywordPage />;
}
