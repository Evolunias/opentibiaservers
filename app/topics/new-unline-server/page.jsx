import NewUnlineServerKeywordPage, { generateMetadata } from './new-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineServerKeywordPage />;
}
