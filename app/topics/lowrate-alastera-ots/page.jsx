import LowrateAlasteraOtsKeywordPage, { generateMetadata } from './lowrate-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraOtsKeywordPage />;
}
