import NewNostaltherOtsKeywordPage, { generateMetadata } from './new-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherOtsKeywordPage />;
}
