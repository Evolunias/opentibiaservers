import HarmoniaOtEvoServerUsaKeywordPage, { generateMetadata } from './harmonia-ot-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtEvoServerUsaKeywordPage />;
}
