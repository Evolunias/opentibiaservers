import NtoStarGermanyServerKeywordPage, { generateMetadata } from './nto-star-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarGermanyServerKeywordPage />;
}
