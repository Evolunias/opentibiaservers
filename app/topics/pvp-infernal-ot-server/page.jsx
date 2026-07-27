import PvpInfernalOtServerKeywordPage, { generateMetadata } from './pvp-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpInfernalOtServerKeywordPage />;
}
