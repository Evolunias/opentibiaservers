import HighrateSerenityOtsKeywordPage, { generateMetadata } from './highrate-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityOtsKeywordPage />;
}
