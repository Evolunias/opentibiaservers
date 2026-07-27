import Tibia1098CustomMapServerListKeywordPage, { generateMetadata } from './tibia-10-98-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098CustomMapServerListKeywordPage />;
}
