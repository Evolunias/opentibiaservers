import Tibia84ServerListKeywordPage, { generateMetadata } from './tibia-8-4-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84ServerListKeywordPage />;
}
