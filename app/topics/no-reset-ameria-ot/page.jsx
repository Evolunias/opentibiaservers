import NoResetAmeriaOtKeywordPage, { generateMetadata } from './no-reset-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaOtKeywordPage />;
}
