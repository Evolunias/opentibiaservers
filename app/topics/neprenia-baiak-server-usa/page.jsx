import NepreniaBaiakServerUsaKeywordPage, { generateMetadata } from './neprenia-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaBaiakServerUsaKeywordPage />;
}
