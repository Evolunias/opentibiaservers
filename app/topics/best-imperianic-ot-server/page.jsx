import BestImperianicOtServerKeywordPage, { generateMetadata } from './best-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicOtServerKeywordPage />;
}
