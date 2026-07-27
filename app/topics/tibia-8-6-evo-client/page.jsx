import Tibia86EvoClientKeywordPage, { generateMetadata } from './tibia-8-6-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoClientKeywordPage />;
}
