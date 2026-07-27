import BestOtServersKeywordPage, { generateMetadata } from './best-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServersKeywordPage />;
}
