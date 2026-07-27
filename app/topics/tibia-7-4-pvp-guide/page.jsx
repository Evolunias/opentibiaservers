import Tibia74PvpGuideKeywordPage, { generateMetadata } from './tibia-7-4-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpGuideKeywordPage />;
}
