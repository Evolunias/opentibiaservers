import NewCyntaraOtServerKeywordPage, { generateMetadata } from './new-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraOtServerKeywordPage />;
}
