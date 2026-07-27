import FreshStartRegisterChileKeywordPage, { generateMetadata } from './fresh-start-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRegisterChileKeywordPage />;
}
