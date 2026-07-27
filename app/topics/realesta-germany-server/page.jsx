import RealestaGermanyServerKeywordPage, { generateMetadata } from './realesta-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaGermanyServerKeywordPage />;
}
