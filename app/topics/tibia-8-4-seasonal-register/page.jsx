import Tibia84SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalRegisterKeywordPage />;
}
