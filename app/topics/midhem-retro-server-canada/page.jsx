import MidhemRetroServerCanadaKeywordPage, { generateMetadata } from './midhem-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRetroServerCanadaKeywordPage />;
}
