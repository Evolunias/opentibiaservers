import Tibia74PvpServerKeywordPage, { generateMetadata } from './tibia-7-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpServerKeywordPage />;
}
