import NewNepreniaKeywordPage, { generateMetadata } from './new-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaKeywordPage />;
}
