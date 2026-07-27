import BaiakTibiantisServerKeywordPage, { generateMetadata } from './baiak-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiantisServerKeywordPage />;
}
