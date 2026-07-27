import DanubiaServerKeywordPage, { generateMetadata } from './danubia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaServerKeywordPage />;
}
