import PopularRealestaOtServerKeywordPage, { generateMetadata } from './popular-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaOtServerKeywordPage />;
}
