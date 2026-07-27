import CurrentTibiameOpenTibiaKeywordPage, { generateMetadata } from './current-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameOpenTibiaKeywordPage />;
}
