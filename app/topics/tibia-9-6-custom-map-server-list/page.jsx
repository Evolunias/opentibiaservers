import Tibia96CustomMapServerListKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapServerListKeywordPage />;
}
