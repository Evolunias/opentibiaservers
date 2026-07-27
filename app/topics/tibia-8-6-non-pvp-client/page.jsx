import Tibia86NonPvpClientKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpClientKeywordPage />;
}
