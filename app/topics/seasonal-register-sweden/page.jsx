import SeasonalRegisterSwedenKeywordPage, { generateMetadata } from './seasonal-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterSwedenKeywordPage />;
}
