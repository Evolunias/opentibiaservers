import NonPvpServerListMexicoKeywordPage, { generateMetadata } from './non-pvp-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListMexicoKeywordPage />;
}
