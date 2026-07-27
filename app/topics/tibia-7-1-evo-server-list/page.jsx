import Tibia71EvoServerListKeywordPage, { generateMetadata } from './tibia-7-1-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71EvoServerListKeywordPage />;
}
