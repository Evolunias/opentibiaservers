import AmeriaFranceServerKeywordPage, { generateMetadata } from './ameria-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaFranceServerKeywordPage />;
}
