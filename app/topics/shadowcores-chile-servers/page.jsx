import ShadowcoresChileServersKeywordPage, { generateMetadata } from './shadowcores-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresChileServersKeywordPage />;
}
