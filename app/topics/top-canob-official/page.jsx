import TopCanobOfficialKeywordPage, { generateMetadata } from './top-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobOfficialKeywordPage />;
}
