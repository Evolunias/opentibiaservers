import RetroOtServerGermanyKeywordPage, { generateMetadata } from './retro-ot-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerGermanyKeywordPage />;
}
