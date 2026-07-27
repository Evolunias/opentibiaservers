import NoResetCanobOtsKeywordPage, { generateMetadata } from './no-reset-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobOtsKeywordPage />;
}
