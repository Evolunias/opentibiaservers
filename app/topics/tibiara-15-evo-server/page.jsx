import Tibiara15EvoServerKeywordPage, { generateMetadata } from './tibiara-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15EvoServerKeywordPage />;
}
