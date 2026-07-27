import Tibia12NonPvpClientKeywordPage, { generateMetadata } from './tibia-12-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpClientKeywordPage />;
}
