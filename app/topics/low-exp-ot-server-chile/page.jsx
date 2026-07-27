import LowExpOtServerChileKeywordPage, { generateMetadata } from './low-exp-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerChileKeywordPage />;
}
