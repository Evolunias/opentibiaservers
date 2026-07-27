import RetroUnlineServerKeywordPage, { generateMetadata } from './retro-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroUnlineServerKeywordPage />;
}
