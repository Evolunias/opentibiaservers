import PopularSabrehavenPrivateServerKeywordPage, { generateMetadata } from './popular-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenPrivateServerKeywordPage />;
}
