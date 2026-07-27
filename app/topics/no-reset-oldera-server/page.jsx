import NoResetOlderaServerKeywordPage, { generateMetadata } from './no-reset-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaServerKeywordPage />;
}
