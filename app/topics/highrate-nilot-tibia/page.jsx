import HighrateNilotTibiaKeywordPage, { generateMetadata } from './highrate-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotTibiaKeywordPage />;
}
