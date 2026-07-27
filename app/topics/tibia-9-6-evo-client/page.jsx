import Tibia96EvoClientKeywordPage, { generateMetadata } from './tibia-9-6-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96EvoClientKeywordPage />;
}
