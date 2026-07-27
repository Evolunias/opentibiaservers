import RetroOtServerUkKeywordPage, { generateMetadata } from './retro-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerUkKeywordPage />;
}
