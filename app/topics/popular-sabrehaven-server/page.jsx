import PopularSabrehavenServerKeywordPage, { generateMetadata } from './popular-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenServerKeywordPage />;
}
