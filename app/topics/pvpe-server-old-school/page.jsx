import PvpeServerOldSchoolKeywordPage, { generateMetadata } from './pvpe-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerOldSchoolKeywordPage />;
}
