import TfsServerOldSchoolKeywordPage, { generateMetadata } from './tfs-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerOldSchoolKeywordPage />;
}
