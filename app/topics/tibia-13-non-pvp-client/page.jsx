import Tibia13NonPvpClientKeywordPage, { generateMetadata } from './tibia-13-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpClientKeywordPage />;
}
