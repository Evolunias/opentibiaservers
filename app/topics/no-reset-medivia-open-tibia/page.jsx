import NoResetMediviaOpenTibiaKeywordPage, { generateMetadata } from './no-reset-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaOpenTibiaKeywordPage />;
}
