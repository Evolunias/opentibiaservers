import SeasonalRegisterNorthAmericaKeywordPage, { generateMetadata } from './seasonal-register-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterNorthAmericaKeywordPage />;
}
