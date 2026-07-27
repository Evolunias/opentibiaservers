import HarmoniaOtBrazilServerKeywordPage, { generateMetadata } from './harmonia-ot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtBrazilServerKeywordPage />;
}
