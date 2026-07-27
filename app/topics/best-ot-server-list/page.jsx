import BestOtServerListKeywordPage, { generateMetadata } from './best-ot-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerListKeywordPage />;
}
