import HighrateSerenityClientKeywordPage, { generateMetadata } from './highrate-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityClientKeywordPage />;
}
