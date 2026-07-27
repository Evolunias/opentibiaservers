import CustomRubinotLoginKeywordPage, { generateMetadata } from './custom-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotLoginKeywordPage />;
}
