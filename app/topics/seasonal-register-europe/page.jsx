import SeasonalRegisterEuropeKeywordPage, { generateMetadata } from './seasonal-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterEuropeKeywordPage />;
}
