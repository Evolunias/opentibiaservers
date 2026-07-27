import Tibia1098EvoClientKeywordPage, { generateMetadata } from './tibia-10-98-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098EvoClientKeywordPage />;
}
