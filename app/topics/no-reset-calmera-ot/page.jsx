import NoResetCalmeraOtKeywordPage, { generateMetadata } from './no-reset-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCalmeraOtKeywordPage />;
}
