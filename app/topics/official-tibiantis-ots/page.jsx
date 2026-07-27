import OfficialTibiantisOtsKeywordPage, { generateMetadata } from './official-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisOtsKeywordPage />;
}
