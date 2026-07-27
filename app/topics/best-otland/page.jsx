import BestOtlandKeywordPage, { generateMetadata } from './best-otland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtlandKeywordPage />;
}
