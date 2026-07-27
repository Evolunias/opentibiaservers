import Tibia11EvoServersKeywordPage, { generateMetadata } from './tibia-11-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoServersKeywordPage />;
}
