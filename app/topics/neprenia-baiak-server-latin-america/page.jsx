import NepreniaBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './neprenia-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaBaiakServerLatinAmericaKeywordPage />;
}
