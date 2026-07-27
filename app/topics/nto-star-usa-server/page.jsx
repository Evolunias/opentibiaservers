import NtoStarUsaServerKeywordPage, { generateMetadata } from './nto-star-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarUsaServerKeywordPage />;
}
