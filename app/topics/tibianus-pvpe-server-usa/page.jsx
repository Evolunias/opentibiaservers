import TibianusPvpeServerUsaKeywordPage, { generateMetadata } from './tibianus-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusPvpeServerUsaKeywordPage />;
}
