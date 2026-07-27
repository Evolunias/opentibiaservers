import Tibia80NonPvpServerKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpServerKeywordPage />;
}
