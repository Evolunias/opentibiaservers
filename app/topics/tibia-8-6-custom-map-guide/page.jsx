import Tibia86CustomMapGuideKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapGuideKeywordPage />;
}
