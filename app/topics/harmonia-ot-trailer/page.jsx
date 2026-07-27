import HarmoniaOtTrailerKeywordPage, { generateMetadata } from './harmonia-ot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtTrailerKeywordPage />;
}
