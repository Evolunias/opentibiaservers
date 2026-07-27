import ActiveOxygenotOtsKeywordPage, { generateMetadata } from './active-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotOtsKeywordPage />;
}
