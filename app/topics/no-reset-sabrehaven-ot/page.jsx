import NoResetSabrehavenOtKeywordPage, { generateMetadata } from './no-reset-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenOtKeywordPage />;
}
