import MidhemRetroServerFranceKeywordPage, { generateMetadata } from './midhem-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRetroServerFranceKeywordPage />;
}
