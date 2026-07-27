import TopRealestaOtKeywordPage, { generateMetadata } from './top-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaOtKeywordPage />;
}
