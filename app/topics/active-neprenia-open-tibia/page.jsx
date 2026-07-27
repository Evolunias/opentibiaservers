import ActiveNepreniaOpenTibiaKeywordPage, { generateMetadata } from './active-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaOpenTibiaKeywordPage />;
}
