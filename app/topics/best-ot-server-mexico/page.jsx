import BestOtServerMexicoKeywordPage, { generateMetadata } from './best-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtServerMexicoKeywordPage />;
}
