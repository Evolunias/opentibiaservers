import NewNostaltherLoginKeywordPage, { generateMetadata } from './new-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherLoginKeywordPage />;
}
