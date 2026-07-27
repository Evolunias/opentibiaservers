import HarmoniaOtFunServerKeywordPage, { generateMetadata } from './harmonia-ot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtFunServerKeywordPage />;
}
