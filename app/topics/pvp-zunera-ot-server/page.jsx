import PvpZuneraOtServerKeywordPage, { generateMetadata } from './pvp-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpZuneraOtServerKeywordPage />;
}
