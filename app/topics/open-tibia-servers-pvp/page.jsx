import OpenTibiaServersPvpKeywordPage, { generateMetadata } from './open-tibia-servers-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersPvpKeywordPage />;
}
