import NoResetCarlinotKeywordPage, { generateMetadata } from './no-reset-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotKeywordPage />;
}
