import NoResetSerenityOtKeywordPage, { generateMetadata } from './no-reset-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityOtKeywordPage />;
}
