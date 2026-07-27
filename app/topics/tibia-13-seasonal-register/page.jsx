import Tibia13SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-13-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalRegisterKeywordPage />;
}
