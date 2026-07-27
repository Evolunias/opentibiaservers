import Tibia15EvoGuideKeywordPage, { generateMetadata } from './tibia-15-evo-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoGuideKeywordPage />;
}
