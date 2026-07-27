import Tibia772CustomMapServerListKeywordPage, { generateMetadata } from './tibia-7-72-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772CustomMapServerListKeywordPage />;
}
