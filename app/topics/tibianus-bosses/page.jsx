import TibianusBossesKeywordPage, { generateMetadata } from './tibianus-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBossesKeywordPage />;
}
