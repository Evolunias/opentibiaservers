import TopRealestaOtServerKeywordPage, { generateMetadata } from './top-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaOtServerKeywordPage />;
}
