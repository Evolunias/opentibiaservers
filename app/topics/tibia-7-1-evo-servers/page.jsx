import Tibia71EvoServersKeywordPage, { generateMetadata } from './tibia-7-1-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71EvoServersKeywordPage />;
}
