import Tibia12EvoClientKeywordPage, { generateMetadata } from './tibia-12-evo-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoClientKeywordPage />;
}
