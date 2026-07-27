import Tibia11EvoGuideKeywordPage, { generateMetadata } from './tibia-11-evo-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoGuideKeywordPage />;
}
