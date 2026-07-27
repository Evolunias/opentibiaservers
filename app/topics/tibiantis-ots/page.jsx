import TibiantisOtsKeywordPage, { generateMetadata } from './tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisOtsKeywordPage />;
}
