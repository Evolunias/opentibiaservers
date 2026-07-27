import RetroAmeriaServerKeywordPage, { generateMetadata } from './retro-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroAmeriaServerKeywordPage />;
}
