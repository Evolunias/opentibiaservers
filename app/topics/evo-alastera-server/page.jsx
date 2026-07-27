import EvoAlasteraServerKeywordPage, { generateMetadata } from './evo-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoAlasteraServerKeywordPage />;
}
