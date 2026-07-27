import HarmoniaOtArgentinaServerKeywordPage, { generateMetadata } from './harmonia-ot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtArgentinaServerKeywordPage />;
}
