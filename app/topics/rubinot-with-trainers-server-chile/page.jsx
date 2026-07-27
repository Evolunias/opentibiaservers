import RubinotWithTrainersServerChileKeywordPage, { generateMetadata } from './rubinot-with-trainers-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotWithTrainersServerChileKeywordPage />;
}
