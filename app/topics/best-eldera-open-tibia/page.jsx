import BestElderaOpenTibiaKeywordPage, { generateMetadata } from './best-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaOpenTibiaKeywordPage />;
}
