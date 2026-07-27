import RetroCarlinotServerKeywordPage, { generateMetadata } from './retro-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroCarlinotServerKeywordPage />;
}
