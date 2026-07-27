import Tibia13LowExpSeasonKeywordPage, { generateMetadata } from './tibia-13-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpSeasonKeywordPage />;
}
