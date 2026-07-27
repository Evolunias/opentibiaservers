import TopImperianicServerKeywordPage, { generateMetadata } from './top-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicServerKeywordPage />;
}
