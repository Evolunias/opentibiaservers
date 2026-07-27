import TopImperianicOtKeywordPage, { generateMetadata } from './top-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicOtKeywordPage />;
}
