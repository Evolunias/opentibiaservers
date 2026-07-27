import HighrateMistOfDeathOpenTibiaKeywordPage, { generateMetadata } from './highrate-mist-of-death-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMistOfDeathOpenTibiaKeywordPage />;
}
