import NoResetOxygenotLoginKeywordPage, { generateMetadata } from './no-reset-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotLoginKeywordPage />;
}
