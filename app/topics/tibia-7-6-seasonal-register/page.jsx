import Tibia76SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalRegisterKeywordPage />;
}
