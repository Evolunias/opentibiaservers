import Tibia80CustomMapServerListKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapServerListKeywordPage />;
}
