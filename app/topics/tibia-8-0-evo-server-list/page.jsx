import Tibia80EvoServerListKeywordPage, { generateMetadata } from './tibia-8-0-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoServerListKeywordPage />;
}
