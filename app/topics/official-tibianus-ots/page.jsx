import OfficialTibianusOtsKeywordPage, { generateMetadata } from './official-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusOtsKeywordPage />;
}
