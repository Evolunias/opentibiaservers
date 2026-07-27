import RetroRubinotServerKeywordPage, { generateMetadata } from './retro-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRubinotServerKeywordPage />;
}
