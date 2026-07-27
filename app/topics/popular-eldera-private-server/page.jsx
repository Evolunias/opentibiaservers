import PopularElderaPrivateServerKeywordPage, { generateMetadata } from './popular-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaPrivateServerKeywordPage />;
}
