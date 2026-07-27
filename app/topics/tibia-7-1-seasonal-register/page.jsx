import Tibia71SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalRegisterKeywordPage />;
}
