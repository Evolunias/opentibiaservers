import Tibia13FreshStartServersKeywordPage, { generateMetadata } from './tibia-13-fresh-start-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartServersKeywordPage />;
}
