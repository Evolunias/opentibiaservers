import NoResetMediviaKeywordPage, { generateMetadata } from './no-reset-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaKeywordPage />;
}
