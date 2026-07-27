import NoResetMarolaotServerKeywordPage, { generateMetadata } from './no-reset-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMarolaotServerKeywordPage />;
}
