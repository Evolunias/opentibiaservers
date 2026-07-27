import ThorniaRetroServerArgentinaKeywordPage, { generateMetadata } from './thornia-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRetroServerArgentinaKeywordPage />;
}
