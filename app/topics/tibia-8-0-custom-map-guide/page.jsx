import Tibia80CustomMapGuideKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapGuideKeywordPage />;
}
