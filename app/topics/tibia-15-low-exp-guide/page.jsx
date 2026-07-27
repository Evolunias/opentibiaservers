import Tibia15LowExpGuideKeywordPage, { generateMetadata } from './tibia-15-low-exp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpGuideKeywordPage />;
}
