import BestOtServerChileKeywordPage, { generateMetadata } from './best-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerChileKeywordPage />;
}
