import NoResetServerListMexicoKeywordPage, { generateMetadata } from './no-reset-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListMexicoKeywordPage />;
}
