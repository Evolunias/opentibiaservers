import RetroNostaltherServerKeywordPage, { generateMetadata } from './retro-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroNostaltherServerKeywordPage />;
}
