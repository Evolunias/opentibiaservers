import BestElderaClientKeywordPage, { generateMetadata } from './best-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaClientKeywordPage />;
}
