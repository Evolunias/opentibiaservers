import NewTibianusServerKeywordPage, { generateMetadata } from './new-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusServerKeywordPage />;
}
