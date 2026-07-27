import Tibia81EvoClientKeywordPage, { generateMetadata } from './tibia-8-1-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81EvoClientKeywordPage />;
}
