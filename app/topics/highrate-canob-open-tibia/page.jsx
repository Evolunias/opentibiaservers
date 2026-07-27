import HighrateCanobOpenTibiaKeywordPage, { generateMetadata } from './highrate-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobOpenTibiaKeywordPage />;
}
