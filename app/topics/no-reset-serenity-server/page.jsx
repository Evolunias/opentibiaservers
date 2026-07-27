import NoResetSerenityServerKeywordPage, { generateMetadata } from './no-reset-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityServerKeywordPage />;
}
