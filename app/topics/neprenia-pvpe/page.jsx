import NepreniaPvpeKeywordPage, { generateMetadata } from './neprenia-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeKeywordPage />;
}
