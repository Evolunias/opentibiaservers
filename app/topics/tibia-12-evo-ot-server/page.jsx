import Tibia12EvoOtServerKeywordPage, { generateMetadata } from './tibia-12-evo-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoOtServerKeywordPage />;
}
