import Tibia11EvoServerKeywordPage, { generateMetadata } from './tibia-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoServerKeywordPage />;
}
