import Tibia71NonPvpServerKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpServerKeywordPage />;
}
