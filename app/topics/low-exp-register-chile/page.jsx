import LowExpRegisterChileKeywordPage, { generateMetadata } from './low-exp-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterChileKeywordPage />;
}
