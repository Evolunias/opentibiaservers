import PopularTibiaoriginsPrivateServerKeywordPage, { generateMetadata } from './popular-tibiaorigins-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsPrivateServerKeywordPage />;
}
