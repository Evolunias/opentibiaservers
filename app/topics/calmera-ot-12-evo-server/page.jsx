import CalmeraOt12EvoServerKeywordPage, { generateMetadata } from './calmera-ot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt12EvoServerKeywordPage />;
}
