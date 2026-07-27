import Tibia11EvoOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-11-evo-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoOpenTibiaServerKeywordPage />;
}
