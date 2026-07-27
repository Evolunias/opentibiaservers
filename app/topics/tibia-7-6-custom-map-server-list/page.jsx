import Tibia76CustomMapServerListKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapServerListKeywordPage />;
}
