import Midhem76RetroServerKeywordPage, { generateMetadata } from './midhem-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem76RetroServerKeywordPage />;
}
