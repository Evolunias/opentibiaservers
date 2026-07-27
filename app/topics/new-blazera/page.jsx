import NewBlazeraKeywordPage, { generateMetadata } from './new-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraKeywordPage />;
}
