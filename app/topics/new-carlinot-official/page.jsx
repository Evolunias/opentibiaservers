import NewCarlinotOfficialKeywordPage, { generateMetadata } from './new-carlinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotOfficialKeywordPage />;
}
