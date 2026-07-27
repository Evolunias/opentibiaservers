import Tibia13EvoServerListKeywordPage, { generateMetadata } from './tibia-13-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoServerListKeywordPage />;
}
