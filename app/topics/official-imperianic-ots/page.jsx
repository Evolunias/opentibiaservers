import OfficialImperianicOtsKeywordPage, { generateMetadata } from './official-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicOtsKeywordPage />;
}
