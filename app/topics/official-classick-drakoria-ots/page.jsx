import OfficialClassickDrakoriaOtsKeywordPage, { generateMetadata } from './official-classick-drakoria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaOtsKeywordPage />;
}
