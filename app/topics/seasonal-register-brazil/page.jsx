import SeasonalRegisterBrazilKeywordPage, { generateMetadata } from './seasonal-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterBrazilKeywordPage />;
}
