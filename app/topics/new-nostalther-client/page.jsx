import NewNostaltherClientKeywordPage, { generateMetadata } from './new-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherClientKeywordPage />;
}
