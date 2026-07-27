import BestRealeraTibiaKeywordPage, { generateMetadata } from './best-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraTibiaKeywordPage />;
}
