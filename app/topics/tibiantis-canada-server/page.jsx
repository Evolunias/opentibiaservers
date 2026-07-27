import TibiantisCanadaServerKeywordPage, { generateMetadata } from './tibiantis-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisCanadaServerKeywordPage />;
}
