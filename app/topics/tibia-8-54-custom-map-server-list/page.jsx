import Tibia854CustomMapServerListKeywordPage, { generateMetadata } from './tibia-8-54-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854CustomMapServerListKeywordPage />;
}
