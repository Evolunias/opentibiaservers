import GuardiaServerKeywordPage, { generateMetadata } from './guardia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaServerKeywordPage />;
}
