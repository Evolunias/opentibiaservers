import Tibia12CustomMapServerKeywordPage, { generateMetadata } from './tibia-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapServerKeywordPage />;
}
