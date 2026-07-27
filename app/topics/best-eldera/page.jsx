import BestElderaKeywordPage, { generateMetadata } from './best-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaKeywordPage />;
}
