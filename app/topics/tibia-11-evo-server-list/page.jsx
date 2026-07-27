import Tibia11EvoServerListKeywordPage, { generateMetadata } from './tibia-11-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoServerListKeywordPage />;
}
