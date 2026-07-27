import BestXanteriaTibiaKeywordPage, { generateMetadata } from './best-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaTibiaKeywordPage />;
}
