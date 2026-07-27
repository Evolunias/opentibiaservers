import OfficialMidhemOtKeywordPage, { generateMetadata } from './official-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemOtKeywordPage />;
}
