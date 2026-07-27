import LowrateNepreniaKeywordPage, { generateMetadata } from './lowrate-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaKeywordPage />;
}
