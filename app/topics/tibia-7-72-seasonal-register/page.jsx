import Tibia772SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalRegisterKeywordPage />;
}
