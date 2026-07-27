import CurrentSabrehavenOtsKeywordPage, { generateMetadata } from './current-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenOtsKeywordPage />;
}
