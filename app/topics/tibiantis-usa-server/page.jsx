import TibiantisUsaServerKeywordPage, { generateMetadata } from './tibiantis-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisUsaServerKeywordPage />;
}
