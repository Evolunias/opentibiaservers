import Tibia12EvoGuideKeywordPage, { generateMetadata } from './tibia-12-evo-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoGuideKeywordPage />;
}
