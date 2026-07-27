import Tibia14EvoServersKeywordPage, { generateMetadata } from './tibia-14-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoServersKeywordPage />;
}
