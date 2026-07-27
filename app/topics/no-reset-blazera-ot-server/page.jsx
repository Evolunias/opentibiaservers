import NoResetBlazeraOtServerKeywordPage, { generateMetadata } from './no-reset-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraOtServerKeywordPage />;
}
