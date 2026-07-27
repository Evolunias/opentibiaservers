import CalmeraOt11RetroServerKeywordPage, { generateMetadata } from './calmera-ot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt11RetroServerKeywordPage />;
}
