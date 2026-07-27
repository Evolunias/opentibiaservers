import CustomRubinotKeywordPage, { generateMetadata } from './custom-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotKeywordPage />;
}
