import Tibia74NonPvpGuideKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpGuideKeywordPage />;
}
