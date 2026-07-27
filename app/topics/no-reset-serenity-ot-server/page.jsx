import NoResetSerenityOtServerKeywordPage, { generateMetadata } from './no-reset-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityOtServerKeywordPage />;
}
