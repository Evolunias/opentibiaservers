import MediviaWithTrainersServerChileKeywordPage, { generateMetadata } from './medivia-with-trainers-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithTrainersServerChileKeywordPage />;
}
