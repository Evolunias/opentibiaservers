import Tibia86SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalRegisterKeywordPage />;
}
