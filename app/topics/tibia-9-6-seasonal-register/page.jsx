import Tibia96SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalRegisterKeywordPage />;
}
