import TopCanobLoginKeywordPage, { generateMetadata } from './top-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobLoginKeywordPage />;
}
