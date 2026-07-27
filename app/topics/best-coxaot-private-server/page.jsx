import BestCoxaotPrivateServerKeywordPage, { generateMetadata } from './best-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotPrivateServerKeywordPage />;
}
