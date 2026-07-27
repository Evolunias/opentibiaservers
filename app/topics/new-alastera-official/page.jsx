import NewAlasteraOfficialKeywordPage, { generateMetadata } from './new-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraOfficialKeywordPage />;
}
