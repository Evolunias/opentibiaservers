import NoResetAmeriaServerKeywordPage, { generateMetadata } from './no-reset-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaServerKeywordPage />;
}
