import Tibia100SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalRegisterKeywordPage />;
}
