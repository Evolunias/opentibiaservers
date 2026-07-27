import RealeraGermanyServersKeywordPage, { generateMetadata } from './realera-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraGermanyServersKeywordPage />;
}
