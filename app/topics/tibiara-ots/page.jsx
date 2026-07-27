import TibiaraOtsKeywordPage, { generateMetadata } from './tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraOtsKeywordPage />;
}
