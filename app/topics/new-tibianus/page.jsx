import NewTibianusKeywordPage, { generateMetadata } from './new-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusKeywordPage />;
}
