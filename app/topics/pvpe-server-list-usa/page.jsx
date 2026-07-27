import PvpeServerListUsaKeywordPage, { generateMetadata } from './pvpe-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListUsaKeywordPage />;
}
