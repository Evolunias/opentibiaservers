import Tibia14EvoServerListKeywordPage, { generateMetadata } from './tibia-14-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoServerListKeywordPage />;
}
