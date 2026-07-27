import Tibia74SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalRegisterKeywordPage />;
}
