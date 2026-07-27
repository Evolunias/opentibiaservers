import SeasonalRegisterGermanyKeywordPage, { generateMetadata } from './seasonal-register-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterGermanyKeywordPage />;
}
