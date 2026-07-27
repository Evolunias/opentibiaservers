import NoResetAlasteraOtsKeywordPage, { generateMetadata } from './no-reset-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraOtsKeywordPage />;
}
