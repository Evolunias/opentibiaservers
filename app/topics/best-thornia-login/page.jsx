import BestThorniaLoginKeywordPage, { generateMetadata } from './best-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaLoginKeywordPage />;
}
