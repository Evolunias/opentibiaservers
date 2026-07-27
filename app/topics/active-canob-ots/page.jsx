import ActiveCanobOtsKeywordPage, { generateMetadata } from './active-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobOtsKeywordPage />;
}
