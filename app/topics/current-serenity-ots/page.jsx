import CurrentSerenityOtsKeywordPage, { generateMetadata } from './current-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityOtsKeywordPage />;
}
