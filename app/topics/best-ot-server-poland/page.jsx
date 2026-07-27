import BestOtServerPolandKeywordPage, { generateMetadata } from './best-ot-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerPolandKeywordPage />;
}
