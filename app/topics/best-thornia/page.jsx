import BestThorniaKeywordPage, { generateMetadata } from './best-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaKeywordPage />;
}
