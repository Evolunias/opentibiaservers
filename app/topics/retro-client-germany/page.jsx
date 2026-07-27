import RetroClientGermanyKeywordPage, { generateMetadata } from './retro-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientGermanyKeywordPage />;
}
