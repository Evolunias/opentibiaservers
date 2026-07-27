import CurrentSerenityClientKeywordPage, { generateMetadata } from './current-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityClientKeywordPage />;
}
