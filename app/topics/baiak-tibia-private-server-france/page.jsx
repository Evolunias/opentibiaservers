import BaiakTibiaPrivateServerFranceKeywordPage, { generateMetadata } from './baiak-tibia-private-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiaPrivateServerFranceKeywordPage />;
}
