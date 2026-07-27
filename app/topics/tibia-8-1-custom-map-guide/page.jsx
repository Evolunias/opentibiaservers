import Tibia81CustomMapGuideKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapGuideKeywordPage />;
}
