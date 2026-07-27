import NewTibianusLoginKeywordPage, { generateMetadata } from './new-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusLoginKeywordPage />;
}
