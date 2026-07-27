import PvpOtServerFranceKeywordPage, { generateMetadata } from './pvp-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOtServerFranceKeywordPage />;
}
