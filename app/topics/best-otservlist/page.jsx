import BestOtservlistKeywordPage, { generateMetadata } from './best-otservlist';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtservlistKeywordPage />;
}
