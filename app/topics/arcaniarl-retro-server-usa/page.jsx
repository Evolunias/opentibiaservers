import ArcaniarlRetroServerUsaKeywordPage, { generateMetadata } from './arcaniarl-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRetroServerUsaKeywordPage />;
}
