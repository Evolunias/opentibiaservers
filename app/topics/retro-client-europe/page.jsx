import RetroClientEuropeKeywordPage, { generateMetadata } from './retro-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientEuropeKeywordPage />;
}
