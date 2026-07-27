import Tibia100CustomMapGuideKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapGuideKeywordPage />;
}
