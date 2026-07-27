import NewUnlineOtKeywordPage, { generateMetadata } from './new-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineOtKeywordPage />;
}
