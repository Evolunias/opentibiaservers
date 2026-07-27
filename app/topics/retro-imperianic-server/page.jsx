import RetroImperianicServerKeywordPage, { generateMetadata } from './retro-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroImperianicServerKeywordPage />;
}
