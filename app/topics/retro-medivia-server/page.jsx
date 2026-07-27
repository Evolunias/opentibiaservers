import RetroMediviaServerKeywordPage, { generateMetadata } from './retro-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroMediviaServerKeywordPage />;
}
