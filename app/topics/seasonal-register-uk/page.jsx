import SeasonalRegisterUkKeywordPage, { generateMetadata } from './seasonal-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterUkKeywordPage />;
}
