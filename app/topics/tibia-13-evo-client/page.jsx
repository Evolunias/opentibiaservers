import Tibia13EvoClientKeywordPage, { generateMetadata } from './tibia-13-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoClientKeywordPage />;
}
