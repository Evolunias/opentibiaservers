import Tibia96EvoServerListKeywordPage, { generateMetadata } from './tibia-9-6-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96EvoServerListKeywordPage />;
}
