import HarmoniaOt13EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13EvoServerKeywordPage />;
}
