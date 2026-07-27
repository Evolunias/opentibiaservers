import BestBlazeraTibiaKeywordPage, { generateMetadata } from './best-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraTibiaKeywordPage />;
}
