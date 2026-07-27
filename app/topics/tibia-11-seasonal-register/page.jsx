import Tibia11SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-11-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalRegisterKeywordPage />;
}
