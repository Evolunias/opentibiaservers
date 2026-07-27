import NoResetThaisotTibiaKeywordPage, { generateMetadata } from './no-reset-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotTibiaKeywordPage />;
}
