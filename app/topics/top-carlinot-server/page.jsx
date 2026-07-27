import TopCarlinotServerKeywordPage, { generateMetadata } from './top-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotServerKeywordPage />;
}
