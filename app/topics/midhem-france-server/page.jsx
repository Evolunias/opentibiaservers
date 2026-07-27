import MidhemFranceServerKeywordPage, { generateMetadata } from './midhem-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemFranceServerKeywordPage />;
}
