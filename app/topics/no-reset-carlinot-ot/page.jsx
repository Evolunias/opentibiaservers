import NoResetCarlinotOtKeywordPage, { generateMetadata } from './no-reset-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotOtKeywordPage />;
}
