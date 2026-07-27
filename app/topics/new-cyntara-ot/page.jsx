import NewCyntaraOtKeywordPage, { generateMetadata } from './new-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraOtKeywordPage />;
}
