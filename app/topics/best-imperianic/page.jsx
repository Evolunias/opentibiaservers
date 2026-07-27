import BestImperianicKeywordPage, { generateMetadata } from './best-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicKeywordPage />;
}
