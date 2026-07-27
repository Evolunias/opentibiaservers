import Tibia81LowExpGuideKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpGuideKeywordPage />;
}
