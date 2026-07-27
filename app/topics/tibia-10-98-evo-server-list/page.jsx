import Tibia1098EvoServerListKeywordPage, { generateMetadata } from './tibia-10-98-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098EvoServerListKeywordPage />;
}
