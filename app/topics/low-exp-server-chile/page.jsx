import LowExpServerChileKeywordPage, { generateMetadata } from './low-exp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerChileKeywordPage />;
}
