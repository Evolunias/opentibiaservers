import NepreniaBaiakServerBrazilKeywordPage, { generateMetadata } from './neprenia-baiak-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaBaiakServerBrazilKeywordPage />;
}
