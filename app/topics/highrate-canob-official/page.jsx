import HighrateCanobOfficialKeywordPage, { generateMetadata } from './highrate-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobOfficialKeywordPage />;
}
