import LowrateTibiantisOtsKeywordPage, { generateMetadata } from './lowrate-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisOtsKeywordPage />;
}
