import Tibia76EvoServerListKeywordPage, { generateMetadata } from './tibia-7-6-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76EvoServerListKeywordPage />;
}
