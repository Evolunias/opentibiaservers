import Tibia14EvoServerKeywordPage, { generateMetadata } from './tibia-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoServerKeywordPage />;
}
