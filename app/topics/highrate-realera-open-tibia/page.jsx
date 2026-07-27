import HighrateRealeraOpenTibiaKeywordPage, { generateMetadata } from './highrate-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraOpenTibiaKeywordPage />;
}
