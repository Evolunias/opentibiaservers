import Tibia854LowExpSeasonKeywordPage, { generateMetadata } from './tibia-8-54-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854LowExpSeasonKeywordPage />;
}
