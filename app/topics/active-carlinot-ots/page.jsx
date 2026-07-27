import ActiveCarlinotOtsKeywordPage, { generateMetadata } from './active-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotOtsKeywordPage />;
}
