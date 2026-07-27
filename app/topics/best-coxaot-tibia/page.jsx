import BestCoxaotTibiaKeywordPage, { generateMetadata } from './best-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotTibiaKeywordPage />;
}
