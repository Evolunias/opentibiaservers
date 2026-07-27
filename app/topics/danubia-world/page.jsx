import DanubiaWorldKeywordPage, { generateMetadata } from './danubia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaWorldKeywordPage />;
}
