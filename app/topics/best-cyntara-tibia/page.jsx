import BestCyntaraTibiaKeywordPage, { generateMetadata } from './best-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraTibiaKeywordPage />;
}
