import CurrentSerenityServerKeywordPage, { generateMetadata } from './current-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityServerKeywordPage />;
}
