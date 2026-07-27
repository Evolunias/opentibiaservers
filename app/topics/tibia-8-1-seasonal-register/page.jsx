import Tibia81SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalRegisterKeywordPage />;
}
