import Tibia80EvoClientKeywordPage, { generateMetadata } from './tibia-8-0-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoClientKeywordPage />;
}
