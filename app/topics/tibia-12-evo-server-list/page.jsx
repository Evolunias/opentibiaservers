import Tibia12EvoServerListKeywordPage, { generateMetadata } from './tibia-12-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoServerListKeywordPage />;
}
