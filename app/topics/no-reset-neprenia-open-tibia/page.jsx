import NoResetNepreniaOpenTibiaKeywordPage, { generateMetadata } from './no-reset-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaOpenTibiaKeywordPage />;
}
