import LowrateSabrehavenOtsKeywordPage, { generateMetadata } from './lowrate-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenOtsKeywordPage />;
}
