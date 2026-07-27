import Tibia13EvoOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-13-evo-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoOpenTibiaServerKeywordPage />;
}
