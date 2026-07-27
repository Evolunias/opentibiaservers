import NewCarlinotOtKeywordPage, { generateMetadata } from './new-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotOtKeywordPage />;
}
