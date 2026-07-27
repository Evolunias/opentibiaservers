import OfficialDemolidoresOtsKeywordPage, { generateMetadata } from './official-demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresOtsKeywordPage />;
}
