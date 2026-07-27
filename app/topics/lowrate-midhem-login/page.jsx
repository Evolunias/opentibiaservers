import LowrateMidhemLoginKeywordPage, { generateMetadata } from './lowrate-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemLoginKeywordPage />;
}
