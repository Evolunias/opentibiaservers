import ActiveDemolidoresOtsKeywordPage, { generateMetadata } from './active-demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresOtsKeywordPage />;
}
