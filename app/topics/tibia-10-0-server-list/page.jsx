import Tibia100ServerListKeywordPage, { generateMetadata } from './tibia-10-0-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100ServerListKeywordPage />;
}
