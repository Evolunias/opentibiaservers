import BestLumineraOpenTibiaKeywordPage, { generateMetadata } from './best-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraOpenTibiaKeywordPage />;
}
