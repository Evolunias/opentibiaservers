import Tibia15NonPvpClientKeywordPage, { generateMetadata } from './tibia-15-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpClientKeywordPage />;
}
