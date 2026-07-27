import Tibia13EvoOtServerKeywordPage, { generateMetadata } from './tibia-13-evo-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoOtServerKeywordPage />;
}
