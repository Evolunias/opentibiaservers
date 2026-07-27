import HighrateSerenityPrivateServerKeywordPage, { generateMetadata } from './highrate-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityPrivateServerKeywordPage />;
}
