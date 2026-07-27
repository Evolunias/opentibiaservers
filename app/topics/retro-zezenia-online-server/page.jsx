import RetroZezeniaOnlineServerKeywordPage, { generateMetadata } from './retro-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroZezeniaOnlineServerKeywordPage />;
}
