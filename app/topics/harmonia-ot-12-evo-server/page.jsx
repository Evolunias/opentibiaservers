import HarmoniaOt12EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12EvoServerKeywordPage />;
}
