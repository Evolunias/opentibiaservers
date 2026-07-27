import BestEvoleraOpenTibiaKeywordPage, { generateMetadata } from './best-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraOpenTibiaKeywordPage />;
}
