import HighrateYurotsTibiaKeywordPage, { generateMetadata } from './highrate-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsTibiaKeywordPage />;
}
