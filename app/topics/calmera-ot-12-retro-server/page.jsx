import CalmeraOt12RetroServerKeywordPage, { generateMetadata } from './calmera-ot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt12RetroServerKeywordPage />;
}
