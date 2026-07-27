import HarmoniaOtFranceServerKeywordPage, { generateMetadata } from './harmonia-ot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtFranceServerKeywordPage />;
}
