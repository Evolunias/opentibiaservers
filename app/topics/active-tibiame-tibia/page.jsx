import ActiveTibiameTibiaKeywordPage, { generateMetadata } from './active-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameTibiaKeywordPage />;
}
