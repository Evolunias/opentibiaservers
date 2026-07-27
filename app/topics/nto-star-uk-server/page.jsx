import NtoStarUkServerKeywordPage, { generateMetadata } from './nto-star-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarUkServerKeywordPage />;
}
