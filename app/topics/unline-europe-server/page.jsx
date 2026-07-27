import UnlineEuropeServerKeywordPage, { generateMetadata } from './unline-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineEuropeServerKeywordPage />;
}
