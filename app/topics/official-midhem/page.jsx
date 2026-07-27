import OfficialMidhemKeywordPage, { generateMetadata } from './official-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemKeywordPage />;
}
