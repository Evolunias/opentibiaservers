import Tibia11FreshStartServersKeywordPage, { generateMetadata } from './tibia-11-fresh-start-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartServersKeywordPage />;
}
