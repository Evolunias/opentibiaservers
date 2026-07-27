import PopularMediviaLoginKeywordPage, { generateMetadata } from './popular-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaLoginKeywordPage />;
}
