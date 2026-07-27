import NoResetRegisterChileKeywordPage, { generateMetadata } from './no-reset-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRegisterChileKeywordPage />;
}
