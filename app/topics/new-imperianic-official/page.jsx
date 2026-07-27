import NewImperianicOfficialKeywordPage, { generateMetadata } from './new-imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicOfficialKeywordPage />;
}
