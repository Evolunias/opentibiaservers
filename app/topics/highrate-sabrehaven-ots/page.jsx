import HighrateSabrehavenOtsKeywordPage, { generateMetadata } from './highrate-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenOtsKeywordPage />;
}
