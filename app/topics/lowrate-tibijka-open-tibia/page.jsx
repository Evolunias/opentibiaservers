import LowrateTibijkaOpenTibiaKeywordPage, { generateMetadata } from './lowrate-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaOpenTibiaKeywordPage />;
}
