import CalmeraOt13RetroServerKeywordPage, { generateMetadata } from './calmera-ot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt13RetroServerKeywordPage />;
}
