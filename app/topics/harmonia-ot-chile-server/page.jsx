import HarmoniaOtChileServerKeywordPage, { generateMetadata } from './harmonia-ot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtChileServerKeywordPage />;
}
