import Tibia13EvoGuideKeywordPage, { generateMetadata } from './tibia-13-evo-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoGuideKeywordPage />;
}
