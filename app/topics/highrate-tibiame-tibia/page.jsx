import HighrateTibiameTibiaKeywordPage, { generateMetadata } from './highrate-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameTibiaKeywordPage />;
}
