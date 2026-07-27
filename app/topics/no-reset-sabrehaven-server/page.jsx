import NoResetSabrehavenServerKeywordPage, { generateMetadata } from './no-reset-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenServerKeywordPage />;
}
