import NonPvpServerListPolandKeywordPage, { generateMetadata } from './non-pvp-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListPolandKeywordPage />;
}
