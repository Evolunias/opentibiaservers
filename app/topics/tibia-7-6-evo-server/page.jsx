import Tibia76EvoServerKeywordPage, { generateMetadata } from './tibia-7-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76EvoServerKeywordPage />;
}
