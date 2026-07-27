import Tibia80EvoGuideKeywordPage, { generateMetadata } from './tibia-8-0-evo-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoGuideKeywordPage />;
}
