import NewUnlineOtServerKeywordPage, { generateMetadata } from './new-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineOtServerKeywordPage />;
}
