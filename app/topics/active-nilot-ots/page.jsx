import ActiveNilotOtsKeywordPage, { generateMetadata } from './active-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotOtsKeywordPage />;
}
