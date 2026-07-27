import NoResetMarolaotKeywordPage, { generateMetadata } from './no-reset-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMarolaotKeywordPage />;
}
