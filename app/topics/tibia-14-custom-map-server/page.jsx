import Tibia14CustomMapServerKeywordPage, { generateMetadata } from './tibia-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapServerKeywordPage />;
}
