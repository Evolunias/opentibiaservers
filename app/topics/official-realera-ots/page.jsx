import OfficialRealeraOtsKeywordPage, { generateMetadata } from './official-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraOtsKeywordPage />;
}
