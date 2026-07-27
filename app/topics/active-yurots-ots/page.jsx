import ActiveYurotsOtsKeywordPage, { generateMetadata } from './active-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsOtsKeywordPage />;
}
