import ActiveNepreniaKeywordPage, { generateMetadata } from './active-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaKeywordPage />;
}
