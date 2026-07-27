import Tibia80SeasonalRegisterKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalRegisterKeywordPage />;
}
