import Tibia12EvoServersKeywordPage, { generateMetadata } from './tibia-12-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoServersKeywordPage />;
}
