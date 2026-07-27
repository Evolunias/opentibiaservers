import TopUnlineOtKeywordPage, { generateMetadata } from './top-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineOtKeywordPage />;
}
