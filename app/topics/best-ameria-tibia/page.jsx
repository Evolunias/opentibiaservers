import BestAmeriaTibiaKeywordPage, { generateMetadata } from './best-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaTibiaKeywordPage />;
}
