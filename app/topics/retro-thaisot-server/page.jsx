import RetroThaisotServerKeywordPage, { generateMetadata } from './retro-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroThaisotServerKeywordPage />;
}
