import Tibia96CustomMapServerKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapServerKeywordPage />;
}
