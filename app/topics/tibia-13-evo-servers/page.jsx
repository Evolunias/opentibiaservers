import Tibia13EvoServersKeywordPage, { generateMetadata } from './tibia-13-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoServersKeywordPage />;
}
