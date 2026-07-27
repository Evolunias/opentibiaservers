import HighrateCanobTibiaKeywordPage, { generateMetadata } from './highrate-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobTibiaKeywordPage />;
}
