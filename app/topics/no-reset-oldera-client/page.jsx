import NoResetOlderaClientKeywordPage, { generateMetadata } from './no-reset-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaClientKeywordPage />;
}
