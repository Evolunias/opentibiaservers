import NtoStarSwedenServerKeywordPage, { generateMetadata } from './nto-star-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSwedenServerKeywordPage />;
}
