import TopImperianicClientKeywordPage, { generateMetadata } from './top-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicClientKeywordPage />;
}
