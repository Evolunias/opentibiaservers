import NoResetServerListBrazilKeywordPage, { generateMetadata } from './no-reset-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListBrazilKeywordPage />;
}
