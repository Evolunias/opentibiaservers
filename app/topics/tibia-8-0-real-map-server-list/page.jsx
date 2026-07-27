import Tibia80RealMapServerListKeywordPage, { generateMetadata } from './tibia-8-0-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapServerListKeywordPage />;
}
