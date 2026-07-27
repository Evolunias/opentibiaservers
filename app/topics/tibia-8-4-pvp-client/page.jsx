import Tibia84PvpClientKeywordPage, { generateMetadata } from './tibia-8-4-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpClientKeywordPage />;
}
