import Tibiara13EvoServerKeywordPage, { generateMetadata } from './tibiara-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13EvoServerKeywordPage />;
}
