import BestNepreniaTibiaKeywordPage, { generateMetadata } from './best-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaTibiaKeywordPage />;
}
