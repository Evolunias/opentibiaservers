import Tibia100CustomMapServerListKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapServerListKeywordPage />;
}
