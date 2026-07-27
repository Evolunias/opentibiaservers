import Tibia854RealMapServerListKeywordPage, { generateMetadata } from './tibia-8-54-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854RealMapServerListKeywordPage />;
}
