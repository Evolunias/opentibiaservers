import CustomThaisotKeywordPage, { generateMetadata } from './custom-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotKeywordPage />;
}
