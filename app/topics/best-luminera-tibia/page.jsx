import BestLumineraTibiaKeywordPage, { generateMetadata } from './best-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraTibiaKeywordPage />;
}
