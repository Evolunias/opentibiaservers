import LowExpServersChileKeywordPage, { generateMetadata } from './low-exp-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersChileKeywordPage />;
}
