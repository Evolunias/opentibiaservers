import ThaisotRetroServerArgentinaKeywordPage, { generateMetadata } from './thaisot-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRetroServerArgentinaKeywordPage />;
}
