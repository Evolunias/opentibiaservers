import LowrateMidhemClientKeywordPage, { generateMetadata } from './lowrate-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemClientKeywordPage />;
}
