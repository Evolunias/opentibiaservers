import Tibia11LowExpSeasonKeywordPage, { generateMetadata } from './tibia-11-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpSeasonKeywordPage />;
}
