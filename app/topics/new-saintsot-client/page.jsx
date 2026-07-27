import NewSaintsotClientKeywordPage, { generateMetadata } from './new-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotClientKeywordPage />;
}
