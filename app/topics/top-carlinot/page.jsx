import TopCarlinotKeywordPage, { generateMetadata } from './top-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotKeywordPage />;
}
