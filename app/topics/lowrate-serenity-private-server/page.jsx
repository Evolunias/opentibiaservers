import LowrateSerenityPrivateServerKeywordPage, { generateMetadata } from './lowrate-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityPrivateServerKeywordPage />;
}
