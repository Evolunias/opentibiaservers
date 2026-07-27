import HarmoniaOtStatusKeywordPage, { generateMetadata } from './harmonia-ot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtStatusKeywordPage />;
}
