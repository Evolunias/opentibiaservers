import RealeraUsaServersKeywordPage, { generateMetadata } from './realera-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraUsaServersKeywordPage />;
}
