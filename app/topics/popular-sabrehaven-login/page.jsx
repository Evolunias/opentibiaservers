import PopularSabrehavenLoginKeywordPage, { generateMetadata } from './popular-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenLoginKeywordPage />;
}
