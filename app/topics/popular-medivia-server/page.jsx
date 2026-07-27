import PopularMediviaServerKeywordPage, { generateMetadata } from './popular-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaServerKeywordPage />;
}
