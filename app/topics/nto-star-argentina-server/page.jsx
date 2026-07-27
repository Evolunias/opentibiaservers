import NtoStarArgentinaServerKeywordPage, { generateMetadata } from './nto-star-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarArgentinaServerKeywordPage />;
}
