import EvoServerOldSchoolKeywordPage, { generateMetadata } from './evo-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerOldSchoolKeywordPage />;
}
