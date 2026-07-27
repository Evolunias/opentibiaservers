import BestRealestaTibiaKeywordPage, { generateMetadata } from './best-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaTibiaKeywordPage />;
}
