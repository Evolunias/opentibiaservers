import Tibia12EvoOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-12-evo-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoOpenTibiaServerKeywordPage />;
}
