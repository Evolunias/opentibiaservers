import RetroServersGermanyKeywordPage, { generateMetadata } from './retro-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersGermanyKeywordPage />;
}
