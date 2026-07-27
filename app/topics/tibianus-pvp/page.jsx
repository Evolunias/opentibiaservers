import TibianusPvpKeywordPage, { generateMetadata } from './tibianus-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusPvpKeywordPage />;
}
