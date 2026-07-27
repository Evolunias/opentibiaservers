import BestThorniaServerKeywordPage, { generateMetadata } from './best-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaServerKeywordPage />;
}
