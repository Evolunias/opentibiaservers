import NewTibianusOfficialKeywordPage, { generateMetadata } from './new-tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusOfficialKeywordPage />;
}
