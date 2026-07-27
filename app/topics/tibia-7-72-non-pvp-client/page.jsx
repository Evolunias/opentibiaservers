import Tibia772NonPvpClientKeywordPage, { generateMetadata } from './tibia-7-72-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NonPvpClientKeywordPage />;
}
