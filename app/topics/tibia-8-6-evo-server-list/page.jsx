import Tibia86EvoServerListKeywordPage, { generateMetadata } from './tibia-8-6-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoServerListKeywordPage />;
}
