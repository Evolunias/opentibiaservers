import NoResetSabrehavenKeywordPage, { generateMetadata } from './no-reset-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenKeywordPage />;
}
