import RetroServersUkKeywordPage, { generateMetadata } from './retro-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersUkKeywordPage />;
}
