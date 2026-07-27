import OfficialMidhemClientKeywordPage, { generateMetadata } from './official-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemClientKeywordPage />;
}
