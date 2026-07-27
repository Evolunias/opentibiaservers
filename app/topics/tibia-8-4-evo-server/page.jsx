import Tibia84EvoServerKeywordPage, { generateMetadata } from './tibia-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoServerKeywordPage />;
}
