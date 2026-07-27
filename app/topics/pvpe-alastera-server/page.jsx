import PvpeAlasteraServerKeywordPage, { generateMetadata } from './pvpe-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeAlasteraServerKeywordPage />;
}
