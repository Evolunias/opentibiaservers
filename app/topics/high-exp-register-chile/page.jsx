import HighExpRegisterChileKeywordPage, { generateMetadata } from './high-exp-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRegisterChileKeywordPage />;
}
