import AnticaOpenPvpKeywordPage, { generateMetadata } from './antica-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaOpenPvpKeywordPage />;
}
