import ActiveNepreniaOtsKeywordPage, { generateMetadata } from './active-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaOtsKeywordPage />;
}
