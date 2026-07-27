import NewHarmoniaOtServerKeywordPage, { generateMetadata } from './new-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewHarmoniaOtServerKeywordPage />;
}
