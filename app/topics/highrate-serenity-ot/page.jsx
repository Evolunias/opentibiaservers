import HighrateSerenityOtKeywordPage, { generateMetadata } from './highrate-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityOtKeywordPage />;
}
