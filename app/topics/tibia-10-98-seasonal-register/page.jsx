import Tibia1098SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalRegisterKeywordPage />;
}
