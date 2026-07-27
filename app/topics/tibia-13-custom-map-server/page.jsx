import Tibia13CustomMapServerKeywordPage, { generateMetadata } from './tibia-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapServerKeywordPage />;
}
