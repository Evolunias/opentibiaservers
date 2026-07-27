import BaiakOtServerFranceKeywordPage, { generateMetadata } from './baiak-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerFranceKeywordPage />;
}
