import Tibia81NonPvpClientKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpClientKeywordPage />;
}
