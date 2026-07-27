import Tibia96CustomMapGuideKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapGuideKeywordPage />;
}
