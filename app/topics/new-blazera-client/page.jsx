import NewBlazeraClientKeywordPage, { generateMetadata } from './new-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraClientKeywordPage />;
}
