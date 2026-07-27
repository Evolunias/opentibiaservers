import Tibia76EvoClientKeywordPage, { generateMetadata } from './tibia-7-6-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76EvoClientKeywordPage />;
}
