import SeasonalRegisterPolandKeywordPage, { generateMetadata } from './seasonal-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRegisterPolandKeywordPage />;
}
