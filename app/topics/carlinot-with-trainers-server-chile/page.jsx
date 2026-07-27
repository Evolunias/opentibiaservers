import CarlinotWithTrainersServerChileKeywordPage, { generateMetadata } from './carlinot-with-trainers-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWithTrainersServerChileKeywordPage />;
}
