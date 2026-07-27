import NoResetSerenityOtsKeywordPage, { generateMetadata } from './no-reset-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityOtsKeywordPage />;
}
