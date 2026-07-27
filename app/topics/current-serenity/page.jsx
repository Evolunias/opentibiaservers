import CurrentSerenityKeywordPage, { generateMetadata } from './current-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityKeywordPage />;
}
