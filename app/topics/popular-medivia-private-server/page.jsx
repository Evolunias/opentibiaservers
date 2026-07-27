import PopularMediviaPrivateServerKeywordPage, { generateMetadata } from './popular-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaPrivateServerKeywordPage />;
}
