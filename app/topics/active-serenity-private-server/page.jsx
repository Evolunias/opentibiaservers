import ActiveSerenityPrivateServerKeywordPage, { generateMetadata } from './active-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityPrivateServerKeywordPage />;
}
