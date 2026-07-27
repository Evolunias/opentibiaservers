import NoResetNilotTibiaKeywordPage, { generateMetadata } from './no-reset-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotTibiaKeywordPage />;
}
