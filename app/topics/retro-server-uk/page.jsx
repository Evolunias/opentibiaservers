import RetroServerUkKeywordPage, { generateMetadata } from './retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerUkKeywordPage />;
}
