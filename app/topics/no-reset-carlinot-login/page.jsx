import NoResetCarlinotLoginKeywordPage, { generateMetadata } from './no-reset-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotLoginKeywordPage />;
}
