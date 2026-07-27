import NoResetSerenityPrivateServerKeywordPage, { generateMetadata } from './no-reset-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityPrivateServerKeywordPage />;
}
