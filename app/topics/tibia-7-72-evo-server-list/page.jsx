import Tibia772EvoServerListKeywordPage, { generateMetadata } from './tibia-7-72-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772EvoServerListKeywordPage />;
}
