import TibianusPvpeKeywordPage, { generateMetadata } from './tibianus-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusPvpeKeywordPage />;
}
