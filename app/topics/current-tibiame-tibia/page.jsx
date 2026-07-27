import CurrentTibiameTibiaKeywordPage, { generateMetadata } from './current-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameTibiaKeywordPage />;
}
