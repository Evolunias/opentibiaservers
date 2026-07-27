import Tibia11CustomMapServerKeywordPage, { generateMetadata } from './tibia-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapServerKeywordPage />;
}
