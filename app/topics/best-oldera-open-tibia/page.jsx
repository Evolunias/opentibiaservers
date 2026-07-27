import BestOlderaOpenTibiaKeywordPage, { generateMetadata } from './best-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaOpenTibiaKeywordPage />;
}
