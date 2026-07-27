import Tibia13LowExpGuideKeywordPage, { generateMetadata } from './tibia-13-low-exp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpGuideKeywordPage />;
}
