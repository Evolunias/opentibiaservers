import Tibia80CustomMapServerKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapServerKeywordPage />;
}
