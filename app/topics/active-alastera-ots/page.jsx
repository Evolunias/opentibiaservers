import ActiveAlasteraOtsKeywordPage, { generateMetadata } from './active-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraOtsKeywordPage />;
}
