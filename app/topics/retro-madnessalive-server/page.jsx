import RetroMadnessaliveServerKeywordPage, { generateMetadata } from './retro-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroMadnessaliveServerKeywordPage />;
}
