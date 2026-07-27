import RetroServersArgentinaKeywordPage, { generateMetadata } from './retro-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersArgentinaKeywordPage />;
}
