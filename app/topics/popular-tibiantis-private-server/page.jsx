import PopularTibiantisPrivateServerKeywordPage, { generateMetadata } from './popular-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisPrivateServerKeywordPage />;
}
