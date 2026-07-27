import HighrateSerenityKeywordPage, { generateMetadata } from './highrate-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityKeywordPage />;
}
