import DuraOnlineEvoServerFranceKeywordPage, { generateMetadata } from './dura-online-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineEvoServerFranceKeywordPage />;
}
