import DuraOnlineOtKeywordPage, { generateMetadata } from './dura-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineOtKeywordPage />;
}
