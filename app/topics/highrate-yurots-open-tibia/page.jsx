import HighrateYurotsOpenTibiaKeywordPage, { generateMetadata } from './highrate-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsOpenTibiaKeywordPage />;
}
