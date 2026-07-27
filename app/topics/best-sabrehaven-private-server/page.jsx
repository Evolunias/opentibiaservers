import BestSabrehavenPrivateServerKeywordPage, { generateMetadata } from './best-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenPrivateServerKeywordPage />;
}
