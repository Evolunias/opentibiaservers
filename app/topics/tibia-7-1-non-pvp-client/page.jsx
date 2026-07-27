import Tibia71NonPvpClientKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpClientKeywordPage />;
}
