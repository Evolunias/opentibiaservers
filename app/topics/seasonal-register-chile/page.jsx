import SeasonalRegisterChileKeywordPage, { generateMetadata } from './seasonal-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterChileKeywordPage />;
}
