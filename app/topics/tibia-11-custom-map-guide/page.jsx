import Tibia11CustomMapGuideKeywordPage, { generateMetadata } from './tibia-11-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapGuideKeywordPage />;
}
