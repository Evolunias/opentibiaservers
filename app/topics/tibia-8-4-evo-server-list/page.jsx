import Tibia84EvoServerListKeywordPage, { generateMetadata } from './tibia-8-4-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoServerListKeywordPage />;
}
