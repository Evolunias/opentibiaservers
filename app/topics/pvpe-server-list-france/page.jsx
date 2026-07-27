import PvpeServerListFranceKeywordPage, { generateMetadata } from './pvpe-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListFranceKeywordPage />;
}
