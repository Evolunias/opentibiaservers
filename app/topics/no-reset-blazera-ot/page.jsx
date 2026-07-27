import NoResetBlazeraOtKeywordPage, { generateMetadata } from './no-reset-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraOtKeywordPage />;
}
