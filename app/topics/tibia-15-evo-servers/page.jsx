import Tibia15EvoServersKeywordPage, { generateMetadata } from './tibia-15-evo-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoServersKeywordPage />;
}
