import NewNostaltherServerKeywordPage, { generateMetadata } from './new-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherServerKeywordPage />;
}
