import Tibia14EvoGuideKeywordPage, { generateMetadata } from './tibia-14-evo-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoGuideKeywordPage />;
}
