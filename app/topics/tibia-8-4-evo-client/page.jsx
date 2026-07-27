import Tibia84EvoClientKeywordPage, { generateMetadata } from './tibia-8-4-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoClientKeywordPage />;
}
