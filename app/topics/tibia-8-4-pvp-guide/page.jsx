import Tibia84PvpGuideKeywordPage, { generateMetadata } from './tibia-8-4-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpGuideKeywordPage />;
}
