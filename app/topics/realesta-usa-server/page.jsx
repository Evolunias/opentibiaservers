import RealestaUsaServerKeywordPage, { generateMetadata } from './realesta-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaUsaServerKeywordPage />;
}
