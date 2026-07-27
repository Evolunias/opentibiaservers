import NoResetServerListArgentinaKeywordPage, { generateMetadata } from './no-reset-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListArgentinaKeywordPage />;
}
