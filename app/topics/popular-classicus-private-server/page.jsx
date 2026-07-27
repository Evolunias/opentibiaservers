import PopularClassicusPrivateServerKeywordPage, { generateMetadata } from './popular-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusPrivateServerKeywordPage />;
}
