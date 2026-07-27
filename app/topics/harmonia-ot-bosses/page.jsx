import HarmoniaOtBossesKeywordPage, { generateMetadata } from './harmonia-ot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtBossesKeywordPage />;
}
