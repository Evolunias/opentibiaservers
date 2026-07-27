import Tibia15CustomMapGuideKeywordPage, { generateMetadata } from './tibia-15-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapGuideKeywordPage />;
}
