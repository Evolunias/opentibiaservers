import TopElderaClientKeywordPage, { generateMetadata } from './top-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaClientKeywordPage />;
}
