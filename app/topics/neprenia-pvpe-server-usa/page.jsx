import NepreniaPvpeServerUsaKeywordPage, { generateMetadata } from './neprenia-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerUsaKeywordPage />;
}
