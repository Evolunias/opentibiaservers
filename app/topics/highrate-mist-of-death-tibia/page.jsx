import HighrateMistOfDeathTibiaKeywordPage, { generateMetadata } from './highrate-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMistOfDeathTibiaKeywordPage />;
}
