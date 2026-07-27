import CurrentYurotsTibiaKeywordPage, { generateMetadata } from './current-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsTibiaKeywordPage />;
}
