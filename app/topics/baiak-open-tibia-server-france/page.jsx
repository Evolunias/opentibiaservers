import BaiakOpenTibiaServerFranceKeywordPage, { generateMetadata } from './baiak-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerFranceKeywordPage />;
}
