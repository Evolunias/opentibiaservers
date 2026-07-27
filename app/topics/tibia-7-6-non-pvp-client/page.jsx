import Tibia76NonPvpClientKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpClientKeywordPage />;
}
