import NoResetCarlinotServerKeywordPage, { generateMetadata } from './no-reset-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotServerKeywordPage />;
}
