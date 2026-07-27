import SeasonalRegisterUsaKeywordPage, { generateMetadata } from './seasonal-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterUsaKeywordPage />;
}
