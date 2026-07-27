import NewHarmoniaOtKeywordPage, { generateMetadata } from './new-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewHarmoniaOtKeywordPage />;
}
