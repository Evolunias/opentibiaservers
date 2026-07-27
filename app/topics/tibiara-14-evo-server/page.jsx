import Tibiara14EvoServerKeywordPage, { generateMetadata } from './tibiara-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14EvoServerKeywordPage />;
}
