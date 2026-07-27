import HarmoniaOtOtsKeywordPage, { generateMetadata } from './harmonia-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtOtsKeywordPage />;
}
