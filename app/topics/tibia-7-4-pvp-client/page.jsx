import Tibia74PvpClientKeywordPage, { generateMetadata } from './tibia-7-4-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpClientKeywordPage />;
}
