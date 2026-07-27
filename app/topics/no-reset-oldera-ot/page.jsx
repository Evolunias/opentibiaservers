import NoResetOlderaOtKeywordPage, { generateMetadata } from './no-reset-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaOtKeywordPage />;
}
