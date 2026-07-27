import NoResetAlasteraOtKeywordPage, { generateMetadata } from './no-reset-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraOtKeywordPage />;
}
