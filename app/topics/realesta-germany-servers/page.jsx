import RealestaGermanyServersKeywordPage, { generateMetadata } from './realesta-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaGermanyServersKeywordPage />;
}
