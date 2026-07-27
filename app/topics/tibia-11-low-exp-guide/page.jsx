import Tibia11LowExpGuideKeywordPage, { generateMetadata } from './tibia-11-low-exp-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpGuideKeywordPage />;
}
