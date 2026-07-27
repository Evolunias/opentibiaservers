import SerenityPrivateServerKeywordPage, { generateMetadata } from './serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPrivateServerKeywordPage />;
}
