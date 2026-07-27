import Tibia11NonPvpClientKeywordPage, { generateMetadata } from './tibia-11-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpClientKeywordPage />;
}
