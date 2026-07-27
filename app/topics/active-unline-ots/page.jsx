import ActiveUnlineOtsKeywordPage, { generateMetadata } from './active-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineOtsKeywordPage />;
}
