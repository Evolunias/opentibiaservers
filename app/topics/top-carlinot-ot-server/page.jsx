import TopCarlinotOtServerKeywordPage, { generateMetadata } from './top-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotOtServerKeywordPage />;
}
