import NoResetElderaOtServerKeywordPage, { generateMetadata } from './no-reset-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaOtServerKeywordPage />;
}
