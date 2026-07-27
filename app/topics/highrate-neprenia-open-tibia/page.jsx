import HighrateNepreniaOpenTibiaKeywordPage, { generateMetadata } from './highrate-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaOpenTibiaKeywordPage />;
}
