import NoResetOlderaKeywordPage, { generateMetadata } from './no-reset-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaKeywordPage />;
}
