import CalmeraOtStatusKeywordPage, { generateMetadata } from './calmera-ot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtStatusKeywordPage />;
}
