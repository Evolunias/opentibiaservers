import Tibia84NonPvpClientKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpClientKeywordPage />;
}
