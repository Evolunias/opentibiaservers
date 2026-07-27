import OfficialTibiascapeOtsKeywordPage, { generateMetadata } from './official-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeOtsKeywordPage />;
}
