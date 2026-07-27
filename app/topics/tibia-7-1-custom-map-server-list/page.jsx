import Tibia71CustomMapServerListKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapServerListKeywordPage />;
}
