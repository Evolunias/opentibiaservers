import ShadowcoresUsaServerKeywordPage, { generateMetadata } from './shadowcores-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresUsaServerKeywordPage />;
}
