import TopCarlinotOtKeywordPage, { generateMetadata } from './top-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotOtKeywordPage />;
}
