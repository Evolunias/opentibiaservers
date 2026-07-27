import InfernalOtStatusKeywordPage, { generateMetadata } from './infernal-ot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtStatusKeywordPage />;
}
