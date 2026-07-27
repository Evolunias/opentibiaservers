import Tibia12CustomMapServerListKeywordPage, { generateMetadata } from './tibia-12-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapServerListKeywordPage />;
}
