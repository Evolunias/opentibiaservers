import Tibia11EvoClientKeywordPage, { generateMetadata } from './tibia-11-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoClientKeywordPage />;
}
