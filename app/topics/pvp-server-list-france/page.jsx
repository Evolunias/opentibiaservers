import PvpServerListFranceKeywordPage, { generateMetadata } from './pvp-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListFranceKeywordPage />;
}
