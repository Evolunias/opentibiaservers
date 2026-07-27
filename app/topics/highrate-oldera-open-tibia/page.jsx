import HighrateOlderaOpenTibiaKeywordPage, { generateMetadata } from './highrate-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaOpenTibiaKeywordPage />;
}
