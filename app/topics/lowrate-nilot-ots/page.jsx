import LowrateNilotOtsKeywordPage, { generateMetadata } from './lowrate-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotOtsKeywordPage />;
}
