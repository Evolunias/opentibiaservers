import Tibia86CustomMapServerListKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapServerListKeywordPage />;
}
