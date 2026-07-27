import NewOlderaOfficialKeywordPage, { generateMetadata } from './new-oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaOfficialKeywordPage />;
}
