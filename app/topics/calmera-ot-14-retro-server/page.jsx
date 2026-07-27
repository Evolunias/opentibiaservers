import CalmeraOt14RetroServerKeywordPage, { generateMetadata } from './calmera-ot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt14RetroServerKeywordPage />;
}
