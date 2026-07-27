import VenoreotWithTrainersServerChileKeywordPage, { generateMetadata } from './venoreot-with-trainers-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithTrainersServerChileKeywordPage />;
}
