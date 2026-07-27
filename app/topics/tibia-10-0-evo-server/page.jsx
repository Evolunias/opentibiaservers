import Tibia100EvoServerKeywordPage, { generateMetadata } from './tibia-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoServerKeywordPage />;
}
