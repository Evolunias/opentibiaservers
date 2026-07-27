import NoResetCanobServerKeywordPage, { generateMetadata } from './no-reset-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobServerKeywordPage />;
}
