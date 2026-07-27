import NewBlazeraServerKeywordPage, { generateMetadata } from './new-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraServerKeywordPage />;
}
