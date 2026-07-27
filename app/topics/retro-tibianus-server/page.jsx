import RetroTibianusServerKeywordPage, { generateMetadata } from './retro-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibianusServerKeywordPage />;
}
