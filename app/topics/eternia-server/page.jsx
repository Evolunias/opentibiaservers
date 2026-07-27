import EterniaServerKeywordPage, { generateMetadata } from './eternia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaServerKeywordPage />;
}
