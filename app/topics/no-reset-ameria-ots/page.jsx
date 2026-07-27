import NoResetAmeriaOtsKeywordPage, { generateMetadata } from './no-reset-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaOtsKeywordPage />;
}
