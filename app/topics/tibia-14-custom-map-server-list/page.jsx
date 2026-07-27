import Tibia14CustomMapServerListKeywordPage, { generateMetadata } from './tibia-14-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapServerListKeywordPage />;
}
