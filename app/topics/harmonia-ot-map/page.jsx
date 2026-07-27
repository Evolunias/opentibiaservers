import HarmoniaOtMapKeywordPage, { generateMetadata } from './harmonia-ot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtMapKeywordPage />;
}
