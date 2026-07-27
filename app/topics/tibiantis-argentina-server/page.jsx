import TibiantisArgentinaServerKeywordPage, { generateMetadata } from './tibiantis-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisArgentinaServerKeywordPage />;
}
