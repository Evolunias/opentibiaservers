import NewUnlineLoginKeywordPage, { generateMetadata } from './new-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineLoginKeywordPage />;
}
