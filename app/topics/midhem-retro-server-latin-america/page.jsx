import MidhemRetroServerLatinAmericaKeywordPage, { generateMetadata } from './midhem-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRetroServerLatinAmericaKeywordPage />;
}
