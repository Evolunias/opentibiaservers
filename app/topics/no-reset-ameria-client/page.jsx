import NoResetAmeriaClientKeywordPage, { generateMetadata } from './no-reset-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaClientKeywordPage />;
}
