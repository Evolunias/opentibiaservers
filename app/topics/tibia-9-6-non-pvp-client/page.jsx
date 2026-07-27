import Tibia96NonPvpClientKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpClientKeywordPage />;
}
