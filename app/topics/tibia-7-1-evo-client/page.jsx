import Tibia71EvoClientKeywordPage, { generateMetadata } from './tibia-7-1-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71EvoClientKeywordPage />;
}
