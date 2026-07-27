import Tibia14EvoClientKeywordPage, { generateMetadata } from './tibia-14-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoClientKeywordPage />;
}
