import CustomThaisotLoginKeywordPage, { generateMetadata } from './custom-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotLoginKeywordPage />;
}
