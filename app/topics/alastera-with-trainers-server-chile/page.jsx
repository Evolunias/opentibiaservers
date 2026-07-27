import AlasteraWithTrainersServerChileKeywordPage, { generateMetadata } from './alastera-with-trainers-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithTrainersServerChileKeywordPage />;
}
