import Tibia13CustomMapGuideKeywordPage, { generateMetadata } from './tibia-13-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapGuideKeywordPage />;
}
