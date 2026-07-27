import Tibia11CustomMapServerListKeywordPage, { generateMetadata } from './tibia-11-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapServerListKeywordPage />;
}
