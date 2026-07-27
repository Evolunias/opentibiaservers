import OfficialYurotsOtsKeywordPage, { generateMetadata } from './official-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsOtsKeywordPage />;
}
