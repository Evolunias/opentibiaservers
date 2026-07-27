import ActiveAmeriaOtKeywordPage, { generateMetadata } from './active-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaOtKeywordPage />;
}
