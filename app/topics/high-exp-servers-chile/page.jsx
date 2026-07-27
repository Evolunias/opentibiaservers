import HighExpServersChileKeywordPage, { generateMetadata } from './high-exp-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersChileKeywordPage />;
}
