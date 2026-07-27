import CalmeraOt15RetroServerKeywordPage, { generateMetadata } from './calmera-ot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt15RetroServerKeywordPage />;
}
