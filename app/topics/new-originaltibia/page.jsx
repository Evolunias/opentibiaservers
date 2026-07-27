import NewOriginaltibiaKeywordPage, { generateMetadata } from './new-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaKeywordPage />;
}
