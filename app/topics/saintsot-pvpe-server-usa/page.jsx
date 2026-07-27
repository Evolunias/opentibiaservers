import SaintsotPvpeServerUsaKeywordPage, { generateMetadata } from './saintsot-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotPvpeServerUsaKeywordPage />;
}
