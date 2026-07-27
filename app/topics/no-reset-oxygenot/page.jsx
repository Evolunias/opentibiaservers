import NoResetOxygenotKeywordPage, { generateMetadata } from './no-reset-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotKeywordPage />;
}
