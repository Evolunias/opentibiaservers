import Tibia100EvoClientKeywordPage, { generateMetadata } from './tibia-10-0-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoClientKeywordPage />;
}
