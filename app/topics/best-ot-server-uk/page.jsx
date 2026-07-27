import BestOtServerUkKeywordPage, { generateMetadata } from './best-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerUkKeywordPage />;
}
