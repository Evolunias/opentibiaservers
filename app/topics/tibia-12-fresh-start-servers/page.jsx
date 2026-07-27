import Tibia12FreshStartServersKeywordPage, { generateMetadata } from './tibia-12-fresh-start-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartServersKeywordPage />;
}
