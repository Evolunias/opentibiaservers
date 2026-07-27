import Tibia81CustomMapServerListKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapServerListKeywordPage />;
}
