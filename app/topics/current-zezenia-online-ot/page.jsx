import CurrentZezeniaOnlineOtKeywordPage, { generateMetadata } from './current-zezenia-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineOtKeywordPage />;
}
