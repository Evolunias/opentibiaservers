import NoResetSabrehavenOtsKeywordPage, { generateMetadata } from './no-reset-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenOtsKeywordPage />;
}
