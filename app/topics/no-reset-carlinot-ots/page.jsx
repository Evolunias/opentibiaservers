import NoResetCarlinotOtsKeywordPage, { generateMetadata } from './no-reset-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotOtsKeywordPage />;
}
