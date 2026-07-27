import RetroOriginaltibiaServerKeywordPage, { generateMetadata } from './retro-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOriginaltibiaServerKeywordPage />;
}
