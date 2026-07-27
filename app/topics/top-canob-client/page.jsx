import TopCanobClientKeywordPage, { generateMetadata } from './top-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobClientKeywordPage />;
}
