import Tibia15SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-15-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalRegisterKeywordPage />;
}
