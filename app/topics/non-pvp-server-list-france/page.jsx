import NonPvpServerListFranceKeywordPage, { generateMetadata } from './non-pvp-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListFranceKeywordPage />;
}
