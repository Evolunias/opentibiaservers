import HighrateTibijkaOpenTibiaKeywordPage, { generateMetadata } from './highrate-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaOpenTibiaKeywordPage />;
}
