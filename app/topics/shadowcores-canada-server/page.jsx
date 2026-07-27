import ShadowcoresCanadaServerKeywordPage, { generateMetadata } from './shadowcores-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresCanadaServerKeywordPage />;
}
