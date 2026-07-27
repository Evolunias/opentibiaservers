import LowrateMidhemKeywordPage, { generateMetadata } from './lowrate-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemKeywordPage />;
}
