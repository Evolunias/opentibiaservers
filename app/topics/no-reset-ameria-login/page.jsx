import NoResetAmeriaLoginKeywordPage, { generateMetadata } from './no-reset-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaLoginKeywordPage />;
}
