import ActiveOlderaOtKeywordPage, { generateMetadata } from './active-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaOtKeywordPage />;
}
