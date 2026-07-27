import NepreniaPvpeServerPolandKeywordPage, { generateMetadata } from './neprenia-pvpe-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerPolandKeywordPage />;
}
