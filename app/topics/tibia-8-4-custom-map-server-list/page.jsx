import Tibia84CustomMapServerListKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapServerListKeywordPage />;
}
