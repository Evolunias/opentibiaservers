import Tibia76CustomMapGuideKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapGuideKeywordPage />;
}
