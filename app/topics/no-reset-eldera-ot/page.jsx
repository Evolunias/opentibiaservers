import NoResetElderaOtKeywordPage, { generateMetadata } from './no-reset-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaOtKeywordPage />;
}
