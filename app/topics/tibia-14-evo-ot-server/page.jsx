import Tibia14EvoOtServerKeywordPage, { generateMetadata } from './tibia-14-evo-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoOtServerKeywordPage />;
}
