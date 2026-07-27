import Tibia71CustomMapGuideKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapGuideKeywordPage />;
}
