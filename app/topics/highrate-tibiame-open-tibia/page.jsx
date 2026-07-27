import HighrateTibiameOpenTibiaKeywordPage, { generateMetadata } from './highrate-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameOpenTibiaKeywordPage />;
}
