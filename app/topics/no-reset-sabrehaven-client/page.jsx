import NoResetSabrehavenClientKeywordPage, { generateMetadata } from './no-reset-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenClientKeywordPage />;
}
