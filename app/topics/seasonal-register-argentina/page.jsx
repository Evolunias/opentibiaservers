import SeasonalRegisterArgentinaKeywordPage, { generateMetadata } from './seasonal-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterArgentinaKeywordPage />;
}
