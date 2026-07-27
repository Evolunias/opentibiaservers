import TibiantisGermanyServerKeywordPage, { generateMetadata } from './tibiantis-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisGermanyServerKeywordPage />;
}
