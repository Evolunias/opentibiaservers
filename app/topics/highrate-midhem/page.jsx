import HighrateMidhemKeywordPage, { generateMetadata } from './highrate-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemKeywordPage />;
}
