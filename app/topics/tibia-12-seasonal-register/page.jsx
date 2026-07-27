import Tibia12SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-12-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalRegisterKeywordPage />;
}
