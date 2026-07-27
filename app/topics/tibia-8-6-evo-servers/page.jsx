import Tibia86EvoServersKeywordPage, { generateMetadata } from './tibia-8-6-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoServersKeywordPage />;
}
