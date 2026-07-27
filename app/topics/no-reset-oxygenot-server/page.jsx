import NoResetOxygenotServerKeywordPage, { generateMetadata } from './no-reset-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotServerKeywordPage />;
}
