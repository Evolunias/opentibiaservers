import NewTibiameTibiaKeywordPage, { generateMetadata } from './new-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameTibiaKeywordPage />;
}
