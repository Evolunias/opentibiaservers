import NonPvpServerListEuropeKeywordPage, { generateMetadata } from './non-pvp-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListEuropeKeywordPage />;
}
