import NoResetThaisotOpenTibiaKeywordPage, { generateMetadata } from './no-reset-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotOpenTibiaKeywordPage />;
}
