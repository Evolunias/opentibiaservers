import Tibia12EvoServerKeywordPage, { generateMetadata } from './tibia-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoServerKeywordPage />;
}
