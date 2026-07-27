import HighrateCanobClientKeywordPage, { generateMetadata } from './highrate-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobClientKeywordPage />;
}
