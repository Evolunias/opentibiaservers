import HighrateRealeraKeywordPage, { generateMetadata } from './highrate-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraKeywordPage />;
}
