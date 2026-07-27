import Tibia74LowExpSeasonKeywordPage, { generateMetadata } from './tibia-7-4-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74LowExpSeasonKeywordPage />;
}
