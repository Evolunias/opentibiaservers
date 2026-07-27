import Tibia100EvoServerListKeywordPage, { generateMetadata } from './tibia-10-0-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoServerListKeywordPage />;
}
