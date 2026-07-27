import Tibia13CustomMapServerListKeywordPage, { generateMetadata } from './tibia-13-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapServerListKeywordPage />;
}
