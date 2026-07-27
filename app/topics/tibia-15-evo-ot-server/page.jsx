import Tibia15EvoOtServerKeywordPage, { generateMetadata } from './tibia-15-evo-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoOtServerKeywordPage />;
}
