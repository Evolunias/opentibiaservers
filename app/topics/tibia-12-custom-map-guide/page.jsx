import Tibia12CustomMapGuideKeywordPage, { generateMetadata } from './tibia-12-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapGuideKeywordPage />;
}
