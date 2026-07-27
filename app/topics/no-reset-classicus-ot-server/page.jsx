import NoResetClassicusOtServerKeywordPage, { generateMetadata } from './no-reset-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusOtServerKeywordPage />;
}
