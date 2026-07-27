import ActiveKasteriaOtsKeywordPage, { generateMetadata } from './active-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaOtsKeywordPage />;
}
