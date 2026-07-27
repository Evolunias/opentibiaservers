import Tibia12LowExpGuideKeywordPage, { generateMetadata } from './tibia-12-low-exp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpGuideKeywordPage />;
}
