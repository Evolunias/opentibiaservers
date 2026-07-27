import Tibia80EvoServerKeywordPage, { generateMetadata } from './tibia-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoServerKeywordPage />;
}
