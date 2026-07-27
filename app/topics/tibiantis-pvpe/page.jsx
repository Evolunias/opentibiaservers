import TibiantisPvpeKeywordPage, { generateMetadata } from './tibiantis-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisPvpeKeywordPage />;
}
