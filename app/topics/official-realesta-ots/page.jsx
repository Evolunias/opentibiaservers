import OfficialRealestaOtsKeywordPage, { generateMetadata } from './official-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaOtsKeywordPage />;
}
