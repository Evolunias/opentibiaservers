import AmeriaRetroServerUsaKeywordPage, { generateMetadata } from './ameria-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRetroServerUsaKeywordPage />;
}
