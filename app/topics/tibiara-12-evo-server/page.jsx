import Tibiara12EvoServerKeywordPage, { generateMetadata } from './tibiara-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12EvoServerKeywordPage />;
}
