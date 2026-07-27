import NewCanobOfficialKeywordPage, { generateMetadata } from './new-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobOfficialKeywordPage />;
}
