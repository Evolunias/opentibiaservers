import HarmoniaOtOtKeywordPage, { generateMetadata } from './harmonia-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtOtKeywordPage />;
}
