import SeasonalRegisterMexicoKeywordPage, { generateMetadata } from './seasonal-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterMexicoKeywordPage />;
}
