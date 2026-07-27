import RealeraChileServerKeywordPage, { generateMetadata } from './realera-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraChileServerKeywordPage />;
}
