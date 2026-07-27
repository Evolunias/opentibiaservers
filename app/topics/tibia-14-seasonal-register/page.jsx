import Tibia14SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-14-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalRegisterKeywordPage />;
}
